package com.shopbook.service;

import com.shopbook.dao.BaseDao;
import com.shopbook.dao.UserDao;
import com.shopbook.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class UserService implements BaseService<User, String> {

    @Autowired
    private UserDao userDao;

    @Override
    public BaseDao<User, String> getDao() {
        return userDao;
    }
}
