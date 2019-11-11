package com.shopbook.service;

import com.shopbook.dao.BaseDao;
import com.shopbook.dao.ShopDao;
import com.shopbook.entity.Shop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class ShopService implements BaseService<Shop, String> {

    @Autowired
    private ShopDao shopDao;

    @Override
    public BaseDao<Shop, String> getDao() {
        return shopDao;
    }
}
