package com.shopbook.service;

import com.shopbook.dao.BaseDao;
import com.shopbook.dao.CartItemDao;
import com.shopbook.entity.CartItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class CartItemService implements BaseService<CartItem, String> {

    @Autowired
    private CartItemDao cartItemDao;

    @Override
    public BaseDao<CartItem, String> getDao() {
        return null;
    }
}
