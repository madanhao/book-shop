package com.shopbook.service;

import com.shopbook.dao.BaseDao;
import com.shopbook.dao.CartDao;
import com.shopbook.entity.Cart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class CartService implements BaseService<Cart, String> {

    @Autowired
    private CartDao cartDao;

    @Override
    public BaseDao<Cart, String> getDao() {
        return this.cartDao;
    }
}
