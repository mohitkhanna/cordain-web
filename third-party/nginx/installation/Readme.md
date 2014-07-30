# Common
	sudo yum install gcc pcre pcre-devel zlib-devel openssl-devel php-fpm

# LuaJIT Setup
	tar -zxvf LuaJIT-2.0.3.tar.gz
	make
	sudo make install

# NGinx Setup
## Modules
	tar -zxvf echo-nginx-module-0.54.tar.gz; ll
	tar -zxvf headers-more-nginx-module-0.25.tar.gz; ll
	tar -zxvf lua-nginx-module-0.9.10.tar.gz
	tar -zxvf ngx_devel_kit-0.2.19.tar.gz; ll
	tar -zxvf Ngx_http_log_request_speed.tar.gz; ll
	tar -zxvf ngx_http_redis-0.3.7.tar.gz; ll
	tar zxvf redis2-nginx-module-0.11.tar.gz; ll
	tar zxvf set-misc-nginx-module-0.24.tar.gz; ll
	tar zxvf zlib-1.2.8.tar.gz; ll
	rm *.tar.*

## NGinx v1.7.3
### Compile with OS installed OpenSSL
	tar -zxvf nginx-1.7.3.tar.gz
	rm nginx-1.7.3.tar.gz

	export LUAJIT_LIB=/usr/local/lib/
	export LUAJIT_INC=/usr/local/include/luajit-2.0/

	./configure --with-http_gunzip_module --with-http_secure_link_module --with-http_ssl_module --with-http_sub_module --with-zlib=../modules/zlib-1.2.8 --with-debug --add-module=../modules/ngx_devel_kit-0.2.19 --add-module=../modules/lua-nginx-module-0.9.10 --add-module=../modules/headers-more-nginx-module-0.25 --add-module=../modules/ngx_http_log_request_speed --add-module=../modules/ngx_http_redis-0.3.7 --add-module=../modules/redis2-nginx-module-0.11 --add-module=../modules/ngx_http_substitutions_filter_module-master --add-module=../modules/set-misc-nginx-module-0.24 --add-module=../modules/echo-nginx-module-0.54 --with-http_stub_status_module

	make -j2

	sudo make install

# Lua Resty Redis Master
	unzip lua-resty-redis-master.zip
	rm -rf __MACOSX/
	rm lua-resty-redis-master.zip
	cd lua-resty-redis-master/
	rm .gitignore .DS_Store
	cd ..
	sudo mkdir /usr/local/nginx/third-party
	sudo mv lua-resty-redis-master/ /usr/local/nginx/third-party/
