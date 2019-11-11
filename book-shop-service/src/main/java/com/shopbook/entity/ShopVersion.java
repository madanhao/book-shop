package com.shopbook.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "shop_version")
public class ShopVersion {
    private String id;
    private String shopId;
    private String versionName;
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
    @Column(name = "version_name")
    public String getVersionName() {
        return versionName;
    }

    public void setVersionName(String versionName) {
        this.versionName = versionName;
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
        ShopVersion that = (ShopVersion) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(shopId, that.shopId) &&
                Objects.equals(versionName, that.versionName) &&
                Objects.equals(available, that.available) &&
                Objects.equals(created, that.created) &&
                Objects.equals(updated, that.updated) &&
                Objects.equals(createby, that.createby) &&
                Objects.equals(updateby, that.updateby);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, shopId, versionName, available, created, updated, createby, updateby);
    }
}
