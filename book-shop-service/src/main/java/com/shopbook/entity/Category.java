package com.shopbook.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
public class Category {
    private String id;
    private String categoryName;
    private Byte available;
    private Date discountTime;
    private Date created;
    private Date updated;
    private String createby;
    private String updateby;

    @Id
    @Column(name = "id")
    @GenericGenerator(name="idGenerator", strategy="uuid") //这个是hibernate的注解/生成32位UUID
    @GeneratedValue(generator="idGenerator")
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    @Basic
    @Column(name = "category_name")
    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    @Basic
    @Column(name = "available")
    public Byte getAvailable() {
        return available;
    }

    public void setAvailable(Byte available) {
        this.available = available;
    }

    @Basic
    @Column(name = "discount_time")
    public Date getDiscountTime() {
        return discountTime;
    }

    public void setDiscountTime(Date discountTime) {
        this.discountTime = discountTime;
    }

    @Basic
    @Column(name = "created")
    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    @Basic
    @Column(name = "updated")
    public Date getUpdated() {
        return updated;
    }

    public void setUpdated(Date updated) {
        this.updated = updated;
    }

    @Basic
    @Column(name = "createby")
    public String getCreateby() {
        return createby;
    }

    public void setCreateby(String createby) {
        this.createby = createby;
    }

    @Basic
    @Column(name = "updateby")
    public String getUpdateby() {
        return updateby;
    }

    public void setUpdateby(String updateby) {
        this.updateby = updateby;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Category category = (Category) o;
        return Objects.equals(id, category.id) &&
                Objects.equals(categoryName, category.categoryName) &&
                Objects.equals(available, category.available) &&
                Objects.equals(discountTime, category.discountTime) &&
                Objects.equals(created, category.created) &&
                Objects.equals(updated, category.updated) &&
                Objects.equals(createby, category.createby) &&
                Objects.equals(updateby, category.updateby);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, categoryName, available, discountTime, created, updated, createby, updateby);
    }
}
