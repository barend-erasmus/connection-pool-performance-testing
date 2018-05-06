public class ObjectPool<T>
{
    protected int _index;

    protected Func<T> _objectCreateMethod;

    protected T[] _objects;

    protected int _size;

    public ObjectPool(Func<T> objectCreateMethod, int size)
    {
        _index = 0;

        _size = size;

        _objectCreateMethod = objectCreateMethod;

        _objects = new T[_size];
    }

    public T Get()
    {
        var obj = _objects[_index];

        if (obj == null)
        {
            obj = _objectCreateMethod();

            _objects[_index] = obj;
        }

        _index++;

        if (_index >= _size)
        {
            _index = 0;
        }

        return obj;
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        var objectPool = new ObjectPool<MyClass>(() =>
        {
            return new MyClass();
        }, 10);

        var myClass = objectPool.Get();
    }
}