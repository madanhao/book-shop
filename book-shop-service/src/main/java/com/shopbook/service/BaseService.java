package com.shopbook.service;

import com.shopbook.dao.BaseDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;

import java.io.Serializable;
import java.util.List;

/**
 * service基类
 */
public interface BaseService<T, ID extends Serializable> {

    @Autowired
    BaseDao<T, ID> getDao();

    default T save(T t) {
        return getDao().save(t);
    }

    default List<T> saveAll(Iterable<T> var1){
        return getDao().saveAll(var1);
    }

    default T saveAndFlush(T t) {
        return getDao().saveAndFlush(t);
    }

    default T getOne(ID id) {
        return getDao().getOne(id);
    }

    default void delete(T t) {
        getDao().delete(t);
    }

    default void deleteById(ID id) {
        getDao().deleteById(id);
    }

    default void deleteInBatch(Iterable<T> var1){
        getDao().deleteInBatch(var1);
    }

    default boolean exists(Example<T> example) {
        return getDao().exists(example);
    }

    default boolean existsById(ID id){
        return getDao().existsById(id);
    }

    default long count() {
        return getDao().count();
    }

    default List<T> findAll() {
        return getDao().findAll();
    }

    default List<T> findAll(Sort sort) {
        return getDao().findAll(sort);
    }

    default List<T> findAll(Example<T> example) {
        return getDao().findAll(example);
    }

    default Page<T> findAll(Example<T> example, Pageable pageable) {
        return getDao().findAll(example, pageable);
    }

    default List<T> findAll(Example<T> var1, Sort var2){
        return getDao().findAll(var1, var2);
    }

    default Page<T> findAll(Pageable pageable) {
        return getDao().findAll(pageable);
    }

    default List<T> findAll(Specification<T> specification) {
        // TODO Auto-generated method stub
        return null;
    }

    default Page<T> findAll(Specification<T> specification, Pageable pageable) {
        // TODO Auto-generated method stub
        return null;
    }

}
