package com.shopbook.service;

import com.shopbook.dao.BaseDao;
import com.shopbook.dao.OrderTableDao;
import com.shopbook.entity.OrderTable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class OrderTableService implements BaseService<OrderTable, String> {

    @Autowired
    private OrderTableDao orderTableDao;

    @Override
    public BaseDao<OrderTable, String> getDao() {
        return orderTableDao;
    }
}
