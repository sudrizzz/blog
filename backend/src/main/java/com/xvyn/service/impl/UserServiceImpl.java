package com.xvyn.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.xvyn.entity.User;
import com.xvyn.mapper.UserMapper;
import com.xvyn.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {

    private static Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

    private UserMapper userMapper;

    public UserServiceImpl(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    @Override
    @Transactional
    public Integer updateUser(User user) {
        logger.debug("update success");
        return userMapper.updateById(user);
    }

    @Override
    @Cacheable("getUser")
    public User getUser(int userId) {
        return userMapper.selectById(userId);
    }
}
