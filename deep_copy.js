
const object1={
    colour:'blue',
    type:'car',
    perfomance:{
        speed: '100m/s',
        power:'5000cc'
    }
}

const object2=JSON.parse(JSON.stringify(object1));

