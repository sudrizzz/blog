package com.xvyn.util;

import java.time.format.DateTimeFormatter;

public class Time {

    public static String getFormattedDateTime() {
        DateTimeFormatter dateTime = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        return dateTime.format(java.time.LocalDateTime.now());
    }
}
