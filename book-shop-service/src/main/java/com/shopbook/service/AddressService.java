package com.shopbook.service;

import com.shopbook.dao.AddressDao;
import com.shopbook.dao.BaseDao;
import com.shopbook.entity.Address;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class AddressService implements BaseService<Address, String> {

    @Autowired
    private AddressDao addressDao;

    public BaseDao<Address, String> getDao() {
        return this.addressDao;
    }
}
