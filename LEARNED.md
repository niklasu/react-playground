# Run sth only on initial render

```
useEffect(() => {
   /*
   this is executed only once
   */
    },[]);
```

# Run sth when one state var changes

```
const [val, setVal] = useState(0);

    useEffect(() => {
        console.log('value changed to: ', val)
    }, [val])   //like 'observing' the val
```
