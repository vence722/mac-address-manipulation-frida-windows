var proc = Module.getExportByName(null, "GetAdaptersAddresses")
console.log("proc addr:", proc);

Interceptor.attach(proc, {
    onEnter: function(args)
    {
        this.data = args[3]
        console.log('start addr:', this.data)
    },
    onLeave:function(ret){
        console.log(ptr(this.data.add(80)).readByteArray(8))
        ptr(this.data.add(80)).writeByteArray([0x01, 0x02, 0x03, 0x04, 0x05, 0x06])
    }
});

console.log('Start capturing......')
