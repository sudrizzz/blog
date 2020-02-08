package com.xvyn.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.xvyn.entity.User;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

@Mapper
@Component(value = "UserMapper")
public interface UserMapper extends BaseMapper<User> {
}
