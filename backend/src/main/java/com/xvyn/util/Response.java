package com.xvyn.util;

import java.util.HashMap;
import java.util.Map;

public class Response {
    public static Map<String, Object> build (int status) {
        HashMap<String, Object> map = new HashMap<>();
        if (status == 0) {
            map.put("code", "500");
            map.put("status", "failed");
        } else {
            map.put("code", "200");
            map.put("status", "success");
        }
        return map;
    }
}
