package com.xvyn.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Api(tags = "检查token")
@RestController
public class TokenController {

    @ApiOperation("检查token是否有效")
    @GetMapping(value = "/checkToken")
    public void CheckToken() {
    }
}
