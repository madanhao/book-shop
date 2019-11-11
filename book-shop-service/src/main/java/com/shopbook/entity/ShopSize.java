package com.shopbook.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "shop_size")
public class ShopSize {
    private String id;
    private String shopId;
    private String sizeName;
    private Byte available;
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
    @Column(name = "shop_id")
    public String getShopId() {
        return shopId;
    }

    public void setShopId(String shopId) {
        this.shopId = shopId;
    }

    @Basic
    @Column(name = "size_name")
    public String getSizeName() {
        return sizeName;
    }

    public void setSizeName(String sizeName) {
        this.sizeName = sizeName;
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
        ShopSize shopSize = (ShopSize) o;
        return Objects.equals(id, shopSize.id) &&
                Objects.equals(shopId, shopSize.shopId) &&
                Objects.equals(sizeName, shopSize.sizeName) &&
                Objects.equals(available, shopSize.available) &&
                Objects.equals(created, shopSize.created) &&
                Objects.equals(updated, shopSize.updated) &&
                Objects.equals(createby, shopSize.createby) &&
                Objects.equals(updateby, shopSize.updateby);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, shopId, sizeName, available, created, updated, createby, updateby);
    }
}
