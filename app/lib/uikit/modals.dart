import 'package:flutter/material.dart';

class Modal extends StatelessWidget {
  const Modal({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox (
        width: double.infinity,
        height: double.infinity,
        child: Stack(
          alignment: Alignment.centerLeft,
          children: <Widget>[
            Positioned (
              top: 100,
              bottom: 70,
              child: Container (
                width: 200,
                height: 30, // !!
                color: Colors.green,
              ),
            )
          ],
        )
    );
  }
}


