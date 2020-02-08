package com.xvyn.util;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class MD5Encode {

    public static String encodeString(String str) {
        MessageDigest messageDigest;
        try {
            messageDigest = MessageDigest.getInstance("MD5");
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
            return "";
        }
        messageDigest.reset();
        messageDigest.update(str.getBytes());
        byte[] digest = messageDigest.digest();
        BigInteger bigInteger = new BigInteger(1, digest);
        StringBuilder hashText = new StringBuilder(bigInteger.toString(16));
        while (hashText.length() < 32)
            hashText.insert(0, "0");
        return hashText.toString().toUpperCase();
    }
}
