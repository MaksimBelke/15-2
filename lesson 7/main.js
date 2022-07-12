class Dog {
    constructor(weight, height, color) {
        this.weight = weight;
        this.height = height;
        this.color = color;
    }
}

const rex = new Dog(
    10,
    45,
    'pink'
)

// console.log(rex)

const sharik = new Dog(
    69,
    70,
    'black'
)
// console.log(sharik)


class Animal  {
    constructor(type, gender, color, voiceText) {
        this.type = type;
        this.gender = gender;
        this.color = color;
        this.voiceText = voiceText;
    }
}

class bear extends Animal {
    constructor(type, gender, color, voiceText, height, weight) {
        super(type, gender, color, voiceText);
        this.height = height;
        this.weight = weight
    }

}

const Misha = new bear(
    "wild",
    "male",
    "серо-беро-малиновый",
    "ААААААААААА",
    170,
    270
)

// console.log(Misha)

class rabbit extends Animal{
    constructor(type, gender, color, voiceText, earLength, speed, weight) {
        super(type, gender, color, voiceText);
        this.earLength = earLength;
        this.speed = speed;
        this.weight = weight;
    }
    purpose(){
        console.log(`Я не Таласский но очень похож потому что ${this.voiceText}\nмой цвет ${this.color}\nпотому что я ${this.gender}`)
    }
}

const Nurgazy = new rabbit(
    'pet',
    'female',
    'violet',
    "Я Я Я Я Я Я Я Я",
    9,
    2
)

Nurgazy.purpose()


function Animal1(type, gender, color, voiceText, name) {
    console.log(type, gender, color, voiceText)
}

Animal1('pet', 'male', "black", "aaar", "Daler")



class Building {
    constructor(height,width,length,beauty,roof) {
        this.height = height;
        this.width = width;
        this.length = length;
        this.beauty = beauty;
        this.roof = roof;
    }
}
class school extends Building {
    constructor(height, width, length, beauty, roof, desk, chair, table, boilerRoom, teacher,) {
        super(height, width, length, beauty, roof);
        this.desk = desk;
        this.chair = chair;
        this.table = table;
        this.boilerRoom = boilerRoom;
        this.teacher = teacher;
    }
}
const gymnasium = new school(
    12,
    32,
    14,
    'beautiful',
    'red',
    'black',
    'brown',
    'big',
    'warm',
    'englishTeacher'

)
class home extends Building {
    constructor(height,width,length,beauty,roof,bed,sofa,room,tv,cupboard) {
        super(height,width,length,beauty,roof);
        this.bed = bed;
        this.sofa = sofa;
        this.room = room;
        this.tv = tv;
        this.cupboard = cupboard;
    }
}