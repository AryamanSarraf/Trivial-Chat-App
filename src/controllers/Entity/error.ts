export class MyError {
    errors: string[];
    constructor(){
        this.errors = []
    }
    add(err: string){
        this.errors.push(err)
    }
}

