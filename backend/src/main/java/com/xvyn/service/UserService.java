package com.xvyn.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.xvyn.entity.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService extends IService<User> {

    /**
     * 更新用户信息
     * @param user
     * @return
     */
    Integer updateUser(User user);

    /**
     * 查找用户
     * @param userId
     * @return
     */
    User getUser(int userId);

    /**
     * 通过用户名查找用户
     * @param userName
     * @return
     */
    User findUserByUserName(String userName);
}
