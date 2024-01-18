package com.riskman.backserver.config;

import com.riskman.backserver.plugins.Conversion;
import io.jsonwebtoken.*;
import javax.crypto.spec.SecretKeySpec;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.AeadAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.io.Serializable;
import java.time.Instant;
import java.util.Date;


@Component
public class JwtTokenTemplate implements Serializable {
    private static final Logger logger = LoggerFactory.getLogger(JwtTokenTemplate.class);
    private static final String CLAIM_KEY_USERNAME = "sub";

    private static final long EXPIRATION_TIME = 432000000;

    private static final String SECRET = "cuAihCz53DZRjZwbsGcZJ2Ai6At+T142uphtJMsk7iQ=";

    public String generateToken(UserDetails userDetails) {
        Date expirationDate = new Date(System.currentTimeMillis() + EXPIRATION_TIME);

        byte[] keyBytes = Decoders.BASE64.decode(SECRET);

        SecretKey key = Keys.hmacShaKeyFor(keyBytes);

        return Jwts.builder()
                .subject(userDetails.getUsername())
                .signWith(key)
                .expiration(expirationDate)
                .compact();
    }

    public Boolean validateToken(String token, UserDetails userDetails) {
        User user = (User) userDetails;
        String username = getUsernameFromToken(token);
        return (username.equals(user.getUsername()) && !isTokenExpired(token));
    }

    public Boolean isTokenExpired(String token) {
        Date expiration = getExpirationDateFromToken(token);
        return expiration.before(new Date());
    }

    public String getUsernameFromToken(String token) {
        return getClaimsFromToken(token).getSubject();
    }

    public Date getExpirationDateFromToken(String token) {
        return getClaimsFromToken(token).getExpiration();
    }

    private Claims getClaimsFromToken(String token) {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET);

        SecretKey key = Keys.hmacShaKeyFor(keyBytes);

        try {
            return Jwts.parser().verifyWith(key).build().parseSignedClaims(token).getPayload();
        } catch (Exception e) {
            logger.error("JWT Parsing Failed: {}", e.getMessage());
            return null;
        }
    }

}
