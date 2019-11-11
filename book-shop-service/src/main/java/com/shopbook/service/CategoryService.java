package com.shopbook.service;

import com.shopbook.dao.BaseDao;
import com.shopbook.dao.CategoryDao;
import com.shopbook.entity.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class CategoryService implements BaseService<Category, String> {

    @Autowired
    private CategoryDao categoryDao;


    @Override
    public BaseDao<Category, String> getDao() {
        return categoryDao;
    }
}
