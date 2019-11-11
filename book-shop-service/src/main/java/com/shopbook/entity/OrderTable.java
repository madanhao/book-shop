package com.shopbook.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "order_table")
public class OrderTable {
    private String id;
    private String addrId;
    private String discountId;
    private Double totalPrice;
    private String message;
    private String remark;
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
    @Column(name = "addr_id")
    public String getAddrId() {
        return addrId;
    }

    public void setAddrId(String addrId) {
        this.addrId = addrId;
    }

    @Basic
    @Column(name = "discount_id")
    public String getDiscountId() {
        return discountId;
    }

    public void setDiscountId(String discountId) {
        this.discountId = discountId;
    }

    @Basic
    @Column(name = "total_price")
    public Double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }

    @Basic
    @Column(name = "message")
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Basic
    @Column(name = "remark")
    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
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
        OrderTable that = (OrderTable) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(addrId, that.addrId) &&
                Objects.equals(discountId, that.discountId) &&
                Objects.equals(totalPrice, that.totalPrice) &&
                Objects.equals(message, that.message) &&
                Objects.equals(remark, that.remark) &&
                Objects.equals(created, that.created) &&
                Objects.equals(updated, that.updated) &&
                Objects.equals(createby, that.createby) &&
                Objects.equals(updateby, that.updateby);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, addrId, discountId, totalPrice, message, remark, created, updated, createby, updateby);
    }
}
