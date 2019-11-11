package com.shopbook.service;

import com.shopbook.dao.BaseDao;
import com.shopbook.dao.ShopSizeDao;
import com.shopbook.entity.ShopSize;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class ShopSizeService implements BaseService<ShopSize, String> {

    @Autowired
    private ShopSizeDao shopSizeDao;

    @Override
    public BaseDao<ShopSize, String> getDao() {
        return shopSizeDao;
    }
}
