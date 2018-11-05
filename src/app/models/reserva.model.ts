export class Reserva{
    constructor(
        public nombre:string,
        public email:string,
        public phone:string,
        public tour?:string,
        public date?:string,
        public adults?:string,
        public children?:string
    ){

    }
}