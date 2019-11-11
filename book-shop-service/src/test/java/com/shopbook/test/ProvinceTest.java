package com.shopbook.test;

import com.shopbook.dao.AreaDao;
import com.shopbook.entity.Address;
import com.shopbook.service.AddressService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ProvinceTest {

    @Autowired
    private AreaDao areaDao;

    @Autowired
    private AddressService addressService;

    @Test
    public void test2(){
        Address address = new Address();
        address.setArea("上海市/徐汇区");
        address.setCreateby("008");
        address.setCreated(new Date());
        address.setDetail("天华科技园8楼");
        address.setName("尼古拉斯凯奇");
        address.setPhone("13589898897");
        address.setUpdateby("008");
        address.setUpdated(new Date());
        addressService.save(address);
    }

    @Test
    public void test3(){
        List<Address> all = addressService.findAll();
        System.out.println(all);
    }

}
