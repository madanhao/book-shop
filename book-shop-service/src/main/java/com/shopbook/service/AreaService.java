package com.shopbook.service;

import com.shopbook.dao.AreaDao;
import com.shopbook.dao.BaseDao;
import com.shopbook.entity.Area;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class AreaService implements BaseService<Area, String> {

    @Autowired
    private AreaDao areaDao;

    @Override
    public BaseDao<Area, String> getDao() {
        return this.areaDao;
    }
}
