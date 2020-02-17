package com.xvyn.controller;

import com.xvyn.entity.User;
import com.xvyn.service.UserService;
import com.xvyn.util.Response;
import com.xvyn.util.Time;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
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
                                          @RequestBody Map<String, String> data) {
        String original = data.get("original").toUpperCase();
        String password = data.get("password").toUpperCase();
        User user = this.userService.getUser(id);
        if (user.getPassword().equals(original)) {
            user.setPassword(password);
            user.setUpdateTime(Time.getFormattedDateTime());
            int status = this.userService.updateUser(user);
            return Response.build(status);
        } else {
            return Response.build(0);
        }
    }
}
