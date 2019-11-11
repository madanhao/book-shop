
-- ��Ʒ����
CREATE TABLE category(
	id VARCHAR(20) PRIMARY KEY,
	category_name VARCHAR(50) NOT NULL COMMENT '��������',
	available TINYINT COMMENT '�Ƿ���ã�1�����ã�0��������',
	discount_time TIMESTAMP COMMENT '��ʱ�ۿ۽�ֹʱ��',
	created TIMESTAMP NOT NULL COMMENT '����ʱ��',
	updated TIMESTAMP NOT NULL COMMENT '����޸�ʱ��',
	createby VARCHAR(20) NOT NULL COMMENT '������',
	updateby VARCHAR(20) NOT NULL COMMENT '����޸���'
);

-- ��Ʒ����
CREATE TABLE shop(
	id VARCHAR(20) PRIMARY KEY,
	shop_name VARCHAR(50) NOT NULL COMMENT '��Ʒ����',
	shop_price FLOAT(10, 2) NOT NULL COMMENT '�۸�',
	category_id VARCHAR(20) NOT NULL COMMENT '����ID',
	available TINYINT COMMENT '�Ƿ���ã�1�����ã�0��������',
	discount FLOAT(2, 1) COMMENT '����',
	store_count INT NOT NULL COMMENT '���',
	shop_desc TEXT COMMENT '��Ʒ����',
	picture_name VARCHAR(50) COMMENT '��Ʒ��ͼƬ�����ƺͺ�׺',
	created TIMESTAMP NOT NULL COMMENT '����ʱ��',
	updated TIMESTAMP NOT NULL COMMENT '����޸�ʱ��',
	createby VARCHAR(20) NOT NULL COMMENT '������',
	updateby VARCHAR(20) NOT NULL COMMENT '����޸���'
);

-- ��Ʒ�汾
CREATE TABLE shop_version(
	id VARCHAR(20) PRIMARY KEY,
	shop_id VARCHAR(20) NOT NULL COMMENT '��ƷID',
	version_name VARCHAR(50) NOT NULL COMMENT '�汾����',
	available TINYINT COMMENT '�Ƿ���ã�1�����ã�0��������',
	created TIMESTAMP NOT NULL COMMENT '����ʱ��',
	updated TIMESTAMP NOT NULL COMMENT '����޸�ʱ��',
	createby VARCHAR(20) NOT NULL COMMENT '������',
	updateby VARCHAR(20) NOT NULL COMMENT '����޸���'
);

-- ��Ʒ�ͺ�
CREATE TABLE shop_size(
	id VARCHAR(20) PRIMARY KEY,
	shop_id VARCHAR(20) NOT NULL COMMENT '��ƷID',
	size_name VARCHAR(50) NOT NULL COMMENT '�ͺ�����',
	available TINYINT COMMENT '�Ƿ���ã�1�����ã�0��������',
	created TIMESTAMP NOT NULL COMMENT '����ʱ��',
	updated TIMESTAMP NOT NULL COMMENT '����޸�ʱ��',
	createby VARCHAR(20) NOT NULL COMMENT '������',
	updateby VARCHAR(20) NOT NULL COMMENT '����޸���'
);

-- ���ﳵ
CREATE TABLE cart(
	id VARCHAR(20) PRIMARY KEY,
	total_price FLOAT(10, 2) NOT NULL COMMENT '�ܼ�',
	created TIMESTAMP NOT NULL COMMENT '����ʱ��',
	updated TIMESTAMP NOT NULL COMMENT '����޸�ʱ��',
	createby VARCHAR(20) NOT NULL COMMENT '������',
	updateby VARCHAR(20) NOT NULL COMMENT '����޸���'
);

-- ������
CREATE TABLE cart_item(
	id VARCHAR(20) PRIMARY KEY,
	cart_id VARCHAR(20) NOT NULL COMMENT '���ﳵID',
	shop_id VARCHAR(20) NOT NULL COMMENT '��ƷID',
	COUNT INT COMMENT '��Ʒ����',
	ARG VARCHAR(100) COMMENT '��Ʒ����',
	created TIMESTAMP NOT NULL COMMENT '����ʱ��',
	updated TIMESTAMP NOT NULL COMMENT '����޸�ʱ��',
	createby VARCHAR(20) NOT NULL COMMENT '������',
	updateby VARCHAR(20) NOT NULL COMMENT '����޸���'
);

-- ����
CREATE TABLE order_table(
	id VARCHAR(20) PRIMARY KEY,
	addr_id VARCHAR(20) NOT NULL COMMENT '��ַ����',
	discount_id VARCHAR(20) COMMENT '�Ż�ȯ����',
	total_price FLOAT(10, 2) COMMENT '�����ܼ�',
	message VARCHAR(100) COMMENT '�������',
	remark TEXT COMMENT '��ע',
	created TIMESTAMP NOT NULL COMMENT '����ʱ��',
	updated TIMESTAMP NOT NULL COMMENT '����޸�ʱ��',
	createby VARCHAR(20) NOT NULL COMMENT '������',
	updateby VARCHAR(20) NOT NULL COMMENT '����޸���'
);

-- ������
CREATE TABLE order_item(
	id VARCHAR(20) PRIMARY KEY,
	shop_id VARCHAR(20) NOT NULL COMMENT '��ƷID',
	oid VARCHAR(20) NOT NULL COMMENT '����ID',
	COUNT INT COMMENT '��Ʒ����',
	ARG VARCHAR(50) COMMENT '��Ʒ����',
	created TIMESTAMP NOT NULL COMMENT '����ʱ��',
	updated TIMESTAMP NOT NULL COMMENT '����޸�ʱ��',
	createby VARCHAR(20) NOT NULL COMMENT '������',
	updateby VARCHAR(20) NOT NULL COMMENT '����޸���'
);

-- �û�
CREATE TABLE USER(
	id VARCHAR(20) PRIMARY KEY,
	NAME VARCHAR(50) COMMENT '�û���',
	phone VARCHAR(20) COMMENT '�绰',
	sex TINYINT COMMENT '�Ա�1���У�0��Ů',
	birthday TIMESTAMP COMMENT '����',
	AREA VARCHAR(20) COMMENT '����',
	head_sculpture VARCHAR(50) COMMENT 'ͷ��',
	created TIMESTAMP NOT NULL COMMENT '����ʱ��',
	updated TIMESTAMP NOT NULL COMMENT '����޸�ʱ��',
	createby VARCHAR(20) NOT NULL COMMENT '������',
	updateby VARCHAR(20) NOT NULL COMMENT '����޸���'
);

-- �ջ���ַ
CREATE TABLE address(
	id VARCHAR(20) PRIMARY KEY,
	NAME VARCHAR(50) NOT NULL COMMENT '����',
	phone VARCHAR(20) NOT NULL COMMENT '�绰',
	AREA VARCHAR(20) NOT NULL COMMENT '����',
	detail VARCHAR(50) NOT NULL COMMENT '��ϸ��ַ',
	created TIMESTAMP NOT NULL COMMENT '����ʱ��',
	updated TIMESTAMP NOT NULL COMMENT '����޸�ʱ��',
	createby VARCHAR(20) NOT NULL COMMENT '������',
	updateby VARCHAR(20) NOT NULL COMMENT '����޸���'
);

-- ��
CREATE TABLE AREA(
	id VARCHAR(20) PRIMARY KEY,
	pid varchar(20) comment '��ID',
	grade INT NOT NULL COMMENT '�ȼ���1��ʡ��2���У�3����',
	aname VARCHAR(50) NOT NULL COMMENT '��������',
	cid VARCHAR(20) NOT NULL COMMENT '����ID',
	created TIMESTAMP NOT NULL COMMENT '����ʱ��',
	updated TIMESTAMP NOT NULL COMMENT '����޸�ʱ��',
	createby VARCHAR(20) NOT NULL COMMENT '������',
	updateby VARCHAR(20) NOT NULL COMMENT '����޸���'
);

