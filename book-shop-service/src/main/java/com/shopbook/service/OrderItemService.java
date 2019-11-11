package com.shopbook.service;

import com.shopbook.dao.BaseDao;
import com.shopbook.dao.OrderItemDao;
import com.shopbook.entity.OrderItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class OrderItemService implements BaseService<OrderItem, String> {

    @Autowired
    private OrderItemDao orderItemDao;

    @Override
    public BaseDao<OrderItem, String> getDao() {
        return orderItemDao;
    }
}
