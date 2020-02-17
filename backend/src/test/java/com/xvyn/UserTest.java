package com.xvyn;

import com.xvyn.mapper.UserMapper;
import com.xvyn.entity.User;
import com.xvyn.util.MD5Encode;
import com.xvyn.util.Time;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserTest {

    @Autowired
    private UserMapper userMapper;

    @Test
    public void select() {
        List<User> list = userMapper.selectList(null);
        Assert.assertEquals(0, list.size());
        list.forEach(System.out::println);
    }

    @Test
    public void insert() {
        User user = new User();
        user.setUserName("Lili");
        user.setPassword(MD5Encode.encodeString("a"));
        user.setUpdateTime(Time.getFormattedDateTime());
        int rows = userMapper.insert(user);
        System.out.println("影响行数" + rows);
    }

    @Test
    public void delete() {
        int rows = userMapper.deleteById(4);
        System.out.println("影响行数" + rows);
    }

    @Test
    public void getUserName() {
        User u = userMapper.selectById(3);
        System.out.println(u.getUserName());
    }
}
