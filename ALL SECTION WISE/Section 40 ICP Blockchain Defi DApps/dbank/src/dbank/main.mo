import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
import Int "mo:base/Int";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor DBank{
  var currentValue: Float = 300;
  currentValue := 5;
  
  stable var num1 =90;
  // num1+=10;
  Debug.print("The num1 is :");
  Debug.print(debug_show(num1));
  
  stable var startTime = Time.now();

  // Debug.print(debug_show(startTime));

  // Debug.print("Vivek Nikate,")

  // Debug.print(debug_show(currentValue));

  let id = 12467890;

  Debug.print(debug_show(id));
  
  public func topUP(amount: Float) {
    currentValue +=amount;
    Debug.print("Credited Amount: ");
    Debug.print(debug_show(currentValue)); 
  };

  public func WithDraw(amount: Float){

    let temp : Float = currentValue - amount;

    if(temp < 0 ){
      Debug.print("Don't have Sufficient Balance..!");
    }else{ 
      currentValue -= amount;
      Debug.print("Withdrawal Amount: ");
      Debug.print(debug_show(currentValue));
    }
  };

  public query func checkBalance(): async Float {
     return currentValue;
  };
  
  public func compound(){
    let currentTime = Time.now();
    let timeElapsedNS = currentTime - startTime;
    let timeElapsedS = timeElapsedNS / 1000000000;
    let timeElapsedM = timeElapsedS / 5;

    currentValue := currentValue * (1.01 ** Float.fromInt(timeElapsedM));

    startTime := currentTime;
  }

  // topUP();

}
 