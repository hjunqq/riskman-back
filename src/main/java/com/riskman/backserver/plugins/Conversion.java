package com.riskman.backserver.plugins;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.*;

public class Conversion {
    private static final Logger logger = LoggerFactory.getLogger(Conversion.class);

    //将model中与entity中类型和名称相同的属性值赋值给对应的entity的属性，并返回entity
    public static <T1, T2> T2 TypeConversion(T1 model, T2 entity) {
        List<Map<String, Object>> modelList = getFiledInfo(model);
        List<Map<String, Object>> entityList = getFiledInfo(entity);
        for (Map e : entityList) {
            for (Map m : modelList) {
                /**
                 * 判断类型和属性名是否都相同
                 */
                if (e.get("type").toString().equals(m.get("type").toString()) && e.get("name")
                        .toString()
                        .equals(m.get("name").toString())) {
                    try {
                        Field f = entity.getClass().getDeclaredField(e.get("name").toString());
                        f.setAccessible(true);
                        f.set(entity, m.get("value"));
                    } catch (Exception ex) {//查看其父类属性
                        try {
                            Field f = entity.getClass().getSuperclass().getDeclaredField(e.get("name").toString());
                            f.setAccessible(true);
                            f.set(entity, m.get("value"));
                        } catch (Exception e1) {
                            logger.error(ex.getMessage(), ex);
                        }
                    }
                }
            }
        }
        return entity;
    }

    public static <T1, T2> T2 CriteraByParms(T1 model, T2 entity) {
        if (model == null) {
            return entity;
        }
        List<Map<String, Object>> modelList = getFiledInfo(model);
        List<Map<String, Object>> entityList = getFiledInfo(entity);

        for (Map m : modelList) {
            /**
             * 判断类型和属性名是否都相同
             */
//                判断字段是否为空
            if (m.get("value") != null) {
                String name = (String) m.get("name");
                if (!(name == "curPage" || name == "pageSize" || name == "limit" || name == "offset")) {
                    if (!name.equals("bDate") && !name.equals("eDate")) {
                        String criteraFunctionName = "and" + toUpperFristChar(name) + "EqualTo";
                        String className = ((String) m.get("type")).split(" ")[1];
                        Method method = null;

                        try {
                            method = entity.getClass().getMethod(criteraFunctionName, Class.forName(className));
                            method.invoke(entity, m.get("value"));

                        } catch (NoSuchMethodException e1) {
                            e1.printStackTrace();
                        } catch (Exception e1) {
                            e1.printStackTrace();
                        }
                    }
                }
            }
        }

        return entity;
    }

    /**
     * 根据属性名获取属性值
     */
    private static Object getFieldValueByName(String fieldName, Object o) {
        try {
            String firstLetter = fieldName.substring(0, 1).toUpperCase();
            String getter = "get" + firstLetter + fieldName.substring(1);
            Method method = o.getClass().getMethod(getter);
            Object value = method.invoke(o);
            return value;
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            return null;
        }
    }

    /**
     * 获取属性名数组
     */
    private static String[] getFiledName(Object o) {
        Field[] fields = o.getClass().getDeclaredFields();
        String[] fieldNames = new String[fields.length];
        for (int i = 0; i < fields.length; i++) {
            fieldNames[i] = fields[i].getName();
        }
        return fieldNames;
    }

    /**
     * 获取属性类型(type)，属性名(name)，属性值(value)的map组成的list
     */
    private static List<Map<String, Object>> getFiledInfo(Object o) {
        List<Map<String, Object>> list = new ArrayList<>();
        List<Field> fields = new ArrayList<>();
        fields.addAll(Arrays.asList(o.getClass().getDeclaredFields()));

        /**
         * 如果存在父类，获取父类的属性值，类型，名称并添加到一起
         */
        Class sc = o.getClass().getSuperclass();
        if (sc != null) {
            fields.addAll(Arrays.asList(sc.getDeclaredFields()));
        }
        for (Field field : fields) {
            Map<String, Object> infoMap = new HashMap<>();
            infoMap.put("type", field.getType().toString());
            infoMap.put("name", field.getName());
            infoMap.put("value", getFieldValueByName(field.getName(), o));
            list.add(infoMap);
        }
        return list;
    }

    private static String toUpperFristChar(String string) {
        char[] charArray = string.toCharArray();
        charArray[0] -= 32;
        return String.valueOf(charArray);
    }
}
