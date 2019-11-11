package com.shopbook.service;

import com.shopbook.dao.BaseDao;
import com.shopbook.dao.ShopVersionDao;
import com.shopbook.entity.ShopVersion;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class ShopVersionService implements BaseService<ShopVersion, String> {

    @Autowired
    private ShopVersionDao shopVersionDao;

    @Override
    public BaseDao<ShopVersion, String> getDao() {
        return shopVersionDao;
    }
}
