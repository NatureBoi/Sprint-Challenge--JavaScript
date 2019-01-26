// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker{
    constructor(att){
        this.length  = att.length;
        this.width = att.width;
        this.height = att.heihgt;
    }
    volume (){
        return (this.length * this.width * this.height);
      }
      surfaceArea (){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
      }
  }

  const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    heihgt: 5,
  })

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/*  
    Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.
    Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.
    Test your work by logging out your volume and surface area.
*/

    class CubeMaker extends CuboidMaker{
        constructor(cubeAtt){
            super(cubeAtt)
        }
    }

    const cube1 = new CubeMaker({
        length: .4,
        width: 1,
        heihgt: .5,
    })

    const cube2 = new CubeMaker({
        length: 3,
        width: 1,
        heihgt: 2,
    })

    const cube3 = new CubeMaker({
        length: 14,
        width: 25,
        heihgt: 35,
    })

    console.log(cube1.volume())
    console.log(cube1.surfaceArea())

    console.log(cube2.volume())
    console.log(cube2.surfaceArea())

    console.log(cube3.volume())
    console.log(cube3.surfaceArea())