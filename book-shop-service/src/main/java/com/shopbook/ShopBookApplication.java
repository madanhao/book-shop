package com.shopbook;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@EnableTransactionManagement
@SpringBootApplication
public class ShopBookApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShopBookApplication.class, args);
	}
	
}
