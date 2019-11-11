package com.shopbook.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
public class Shop {
    private String id;
    private String shopName;
    private double shopPrice;
    private String categoryId;
    private Byte available;
    private Double discount;
    private int storeCount;
    private String shopDesc;
    private String pictureName;
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
    @Column(name = "shop_name")
    public String getShopName() {
        return shopName;
    }

    public void setShopName(String shopName) {
        this.shopName = shopName;
    }

    @Basic
    @Column(name = "shop_price")
    public double getShopPrice() {
        return shopPrice;
    }

    public void setShopPrice(double shopPrice) {
        this.shopPrice = shopPrice;
    }

    @Basic
    @Column(name = "category_id")
    public String getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(String categoryId) {
        this.categoryId = categoryId;
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
    @Column(name = "discount")
    public Double getDiscount() {
        return discount;
    }

    public void setDiscount(Double discount) {
        this.discount = discount;
    }

    @Basic
    @Column(name = "store_count")
    public int getStoreCount() {
        return storeCount;
    }

    public void setStoreCount(int storeCount) {
        this.storeCount = storeCount;
    }

    @Basic
    @Column(name = "shop_desc")
    public String getShopDesc() {
        return shopDesc;
    }

    public void setShopDesc(String shopDesc) {
        this.shopDesc = shopDesc;
    }

    @Basic
    @Column(name = "picture_name")
    public String getPictureName() {
        return pictureName;
    }

    public void setPictureName(String pictureName) {
        this.pictureName = pictureName;
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
        Shop shop = (Shop) o;
        return Double.compare(shop.shopPrice, shopPrice) == 0 &&
                storeCount == shop.storeCount &&
                Objects.equals(id, shop.id) &&
                Objects.equals(shopName, shop.shopName) &&
                Objects.equals(categoryId, shop.categoryId) &&
                Objects.equals(available, shop.available) &&
                Objects.equals(discount, shop.discount) &&
                Objects.equals(shopDesc, shop.shopDesc) &&
                Objects.equals(pictureName, shop.pictureName) &&
                Objects.equals(created, shop.created) &&
                Objects.equals(updated, shop.updated) &&
                Objects.equals(createby, shop.createby) &&
                Objects.equals(updateby, shop.updateby);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, shopName, shopPrice, categoryId, available, discount, storeCount, shopDesc, pictureName, created, updated, createby, updateby);
    }
}
