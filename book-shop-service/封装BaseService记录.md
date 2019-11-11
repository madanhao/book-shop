## 记录下springBoot、springMVC、springDataJPA环境下封装BaseService的过程

### 1. Dao层
```
@NoRepositoryBean
public interface BaseRepository<T> extends JpaRepository<T, String> {
    
}
首先我们自己写个BaseRepository接口，实现JpaRepository。加上@NoRepositoryBean注解，标识为接口，不创建实例。
项目中实体类的ID为String或Long类型，直接写在JpaRepository<T, String>中，我这里使用UUID，所以为String
```
#### 所有Dao都继承BaseRepository
```
public interface ProvinceDao extends BaseRepository<Province> {

}
```
### 2. Service层
```
/**
 * service基类
 * @param <T>
 * @param <R>
 */
public class BaseService<T, R extends BaseRepository<T>> {

    @Resource
    protected R baseRepository;

    public T save(T t) {
        return baseRepository.save(t);
    }

    <S extends T> List<S> saveAll(Iterable<S> var1){
        return baseRepository.saveAll(var1);
    }

    public T saveAndFlush(T t) {
        return baseRepository.saveAndFlush(t);
    }

    public T getOne(String id) {
        return baseRepository.getOne(id);
    }

    public void delete(T t) {
        baseRepository.delete(t);
    }

    public void deleteById(String id) {
        baseRepository.deleteById(id);
    }

    void deleteInBatch(Iterable<T> var1){
        baseRepository.deleteInBatch(var1);
    }

    public boolean exists(Example<T> example) {
        return baseRepository.exists(example);
    }

    boolean existsById(String id){
        return baseRepository.existsById(id);
    }

    public long count() {
        return baseRepository.count();
    }

    public List<T> findAll() {
        return baseRepository.findAll();
    }

    public List<T> findAll(Sort sort) {
        return baseRepository.findAll(sort);
    }

    public List<T> findAll(Example<T> example) {
        return baseRepository.findAll(example);
    }

    public Page<T> findAll(Example<T> example, Pageable pageable) {
        return baseRepository.findAll(example, pageable);
    }

    <S extends T> List<S> findAll(Example<S> var1, Sort var2){
        return baseRepository.findAll(var1, var2);
    }

    public Page<T> findAll(Pageable pageable) {
        return baseRepository.findAll(pageable);
    }

    public List<T> findAll(Specification<T> specification) {
        // TODO Auto-generated method stub
        return null;
    }

    public Page<T> findAll(Specification<T> specification, Pageable pageable) {
        // TODO Auto-generated method stub
        return null;
    }

}
BaseService的泛型第一个是实体类，第二个是Dao。也可以自行扩展JPA中没有的方法。
```
#### 所有Service都继承BaseService
```
@Service
@Transactional
public class ProvinceService extends BaseService<Province, ProvinceDao>  {

}
此时继承了BaseService的类便有了单表的增删改查方法，避免了重复造轮子，美滋滋。
```

### 3.测试
```
@RunWith(SpringRunner.class)
@SpringBootTest
public class ProvinceTest {

    @Autowired
    ProvinceService provinceService;

    @Test
    public void test1(){

        List<Province> all = provinceService.findAll();
        System.out.println(all.toString());

    }
}

```
### 大功告成！


