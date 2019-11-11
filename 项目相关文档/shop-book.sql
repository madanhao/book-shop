
-- 商品分类
CREATE TABLE category(
	id VARCHAR(20) PRIMARY KEY,
	category_name VARCHAR(50) NOT NULL COMMENT '分类名称',
	available TINYINT COMMENT '是否可用：1：可用，0：不可用',
	discount_time TIMESTAMP COMMENT '限时折扣截止时间',
	created TIMESTAMP NOT NULL COMMENT '创建时间',
	updated TIMESTAMP NOT NULL COMMENT '最后修改时间',
	createby VARCHAR(20) NOT NULL COMMENT '创建人',
	updateby VARCHAR(20) NOT NULL COMMENT '最后修改人'
);

-- 商品详情
CREATE TABLE shop(
	id VARCHAR(20) PRIMARY KEY,
	shop_name VARCHAR(50) NOT NULL COMMENT '商品名称',
	shop_price FLOAT(10, 2) NOT NULL COMMENT '价格',
	category_id VARCHAR(20) NOT NULL COMMENT '分类ID',
	available TINYINT COMMENT '是否可用：1：可用，0：不可用',
	discount FLOAT(2, 1) COMMENT '打折',
	store_count INT NOT NULL COMMENT '库存',
	shop_desc TEXT COMMENT '商品描述',
	picture_name VARCHAR(50) COMMENT '商品主图片：名称和后缀',
	created TIMESTAMP NOT NULL COMMENT '创建时间',
	updated TIMESTAMP NOT NULL COMMENT '最后修改时间',
	createby VARCHAR(20) NOT NULL COMMENT '创建人',
	updateby VARCHAR(20) NOT NULL COMMENT '最后修改人'
);

-- 商品版本
CREATE TABLE shop_version(
	id VARCHAR(20) PRIMARY KEY,
	shop_id VARCHAR(20) NOT NULL COMMENT '商品ID',
	version_name VARCHAR(50) NOT NULL COMMENT '版本名称',
	available TINYINT COMMENT '是否可用：1：可用，0：不可用',
	created TIMESTAMP NOT NULL COMMENT '创建时间',
	updated TIMESTAMP NOT NULL COMMENT '最后修改时间',
	createby VARCHAR(20) NOT NULL COMMENT '创建人',
	updateby VARCHAR(20) NOT NULL COMMENT '最后修改人'
);

-- 商品型号
CREATE TABLE shop_size(
	id VARCHAR(20) PRIMARY KEY,
	shop_id VARCHAR(20) NOT NULL COMMENT '商品ID',
	size_name VARCHAR(50) NOT NULL COMMENT '型号名称',
	available TINYINT COMMENT '是否可用：1：可用，0：不可用',
	created TIMESTAMP NOT NULL COMMENT '创建时间',
	updated TIMESTAMP NOT NULL COMMENT '最后修改时间',
	createby VARCHAR(20) NOT NULL COMMENT '创建人',
	updateby VARCHAR(20) NOT NULL COMMENT '最后修改人'
);

-- 购物车
CREATE TABLE cart(
	id VARCHAR(20) PRIMARY KEY,
	total_price FLOAT(10, 2) NOT NULL COMMENT '总价',
	created TIMESTAMP NOT NULL COMMENT '创建时间',
	updated TIMESTAMP NOT NULL COMMENT '最后修改时间',
	createby VARCHAR(20) NOT NULL COMMENT '创建人',
	updateby VARCHAR(20) NOT NULL COMMENT '最后修改人'
);

-- 购物项
CREATE TABLE cart_item(
	id VARCHAR(20) PRIMARY KEY,
	cart_id VARCHAR(20) NOT NULL COMMENT '购物车ID',
	shop_id VARCHAR(20) NOT NULL COMMENT '商品ID',
	COUNT INT COMMENT '商品数量',
	ARG VARCHAR(100) COMMENT '商品参数',
	created TIMESTAMP NOT NULL COMMENT '创建时间',
	updated TIMESTAMP NOT NULL COMMENT '最后修改时间',
	createby VARCHAR(20) NOT NULL COMMENT '创建人',
	updateby VARCHAR(20) NOT NULL COMMENT '最后修改人'
);

-- 订单
CREATE TABLE order_table(
	id VARCHAR(20) PRIMARY KEY,
	addr_id VARCHAR(20) NOT NULL COMMENT '地址主键',
	discount_id VARCHAR(20) COMMENT '优惠券主键',
	total_price FLOAT(10, 2) COMMENT '订单总价',
	message VARCHAR(100) COMMENT '买家留言',
	remark TEXT COMMENT '备注',
	created TIMESTAMP NOT NULL COMMENT '创建时间',
	updated TIMESTAMP NOT NULL COMMENT '最后修改时间',
	createby VARCHAR(20) NOT NULL COMMENT '创建人',
	updateby VARCHAR(20) NOT NULL COMMENT '最后修改人'
);

-- 订单项
CREATE TABLE order_item(
	id VARCHAR(20) PRIMARY KEY,
	shop_id VARCHAR(20) NOT NULL COMMENT '商品ID',
	oid VARCHAR(20) NOT NULL COMMENT '订单ID',
	COUNT INT COMMENT '商品数量',
	ARG VARCHAR(50) COMMENT '商品参数',
	created TIMESTAMP NOT NULL COMMENT '创建时间',
	updated TIMESTAMP NOT NULL COMMENT '最后修改时间',
	createby VARCHAR(20) NOT NULL COMMENT '创建人',
	updateby VARCHAR(20) NOT NULL COMMENT '最后修改人'
);

-- 用户
CREATE TABLE USER(
	id VARCHAR(20) PRIMARY KEY,
	NAME VARCHAR(50) COMMENT '用户名',
	phone VARCHAR(20) COMMENT '电话',
	sex TINYINT COMMENT '性别：1：男，0：女',
	birthday TIMESTAMP COMMENT '生日',
	AREA VARCHAR(20) COMMENT '地区',
	head_sculpture VARCHAR(50) COMMENT '头像',
	created TIMESTAMP NOT NULL COMMENT '创建时间',
	updated TIMESTAMP NOT NULL COMMENT '最后修改时间',
	createby VARCHAR(20) NOT NULL COMMENT '创建人',
	updateby VARCHAR(20) NOT NULL COMMENT '最后修改人'
);

-- 收货地址
CREATE TABLE address(
	id VARCHAR(20) PRIMARY KEY,
	NAME VARCHAR(50) NOT NULL COMMENT '姓名',
	phone VARCHAR(20) NOT NULL COMMENT '电话',
	AREA VARCHAR(20) NOT NULL COMMENT '地区',
	detail VARCHAR(50) NOT NULL COMMENT '详细地址',
	created TIMESTAMP NOT NULL COMMENT '创建时间',
	updated TIMESTAMP NOT NULL COMMENT '最后修改时间',
	createby VARCHAR(20) NOT NULL COMMENT '创建人',
	updateby VARCHAR(20) NOT NULL COMMENT '最后修改人'
);

-- 区
CREATE TABLE AREA(
	id VARCHAR(20) PRIMARY KEY,
	pid varchar(20) comment '父ID',
	grade INT NOT NULL COMMENT '等级：1：省，2：市，3：区',
	aname VARCHAR(50) NOT NULL COMMENT '区域名称',
	cid VARCHAR(20) NOT NULL COMMENT '城市ID',
	created TIMESTAMP NOT NULL COMMENT '创建时间',
	updated TIMESTAMP NOT NULL COMMENT '最后修改时间',
	createby VARCHAR(20) NOT NULL COMMENT '创建人',
	updateby VARCHAR(20) NOT NULL COMMENT '最后修改人'
);

