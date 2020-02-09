package com.xvyn.controller;

import com.xvyn.entity.User;
import com.xvyn.service.UserService;
import com.xvyn.util.MD5Encode;
import com.xvyn.util.Time;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Api(tags = "用户管理")
@RestController
@RequestMapping("user")
public class UserController {

    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @CrossOrigin
    @ApiOperation("用户名查询")
    @GetMapping(value = "{id}")
    public Map<String, Object> getUserName(@PathVariable int id) {
        User user = this.userService.getUser(id);
        HashMap<String, Object> map = new HashMap<>();
        map.put(id + "", user.getUserName());
        return map;
    }

    @ApiOperation("用户信息更新")
    @PostMapping(value = "{id}")
    public Map<String, Object> updateUser(@PathVariable int id,
                                          @RequestParam(required = false) String userName,
                                          @RequestParam String password) {
        String passwordEncoded = MD5Encode.encodeString(password);
        String time = Time.getFormattedDateTime();
        User user = this.userService.getUser(id);
        if (!"".equals(userName)) user.setUserName(userName);
        user.setPassword(passwordEncoded);
        user.setUpdateTime(time);
        int status = this.userService.updateUser(user);
        HashMap<String, Object> map = new HashMap<>();
        if (status == 1) {
            map.put("200", "ok");
        } else {
            map.put("500", "update failed");
        }
        return map;
    }
}
