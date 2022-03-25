import 'package:flutter/material.dart';

class StyledText extends StatelessWidget {
  const StyledText({Key? key}) : super(key: key);

  Widget regularHeading(text) => Text(
        text,
        style: const TextStyle(
          color: Color(0xFF6288BD),
          fontSize: 24,
        ),
        textAlign: TextAlign.center,
    softWrap: true,
      );

  Widget boldHeading(text) => Text(
        text,
        style: const TextStyle(
            color: Color(0xFF6288BD),
            fontSize: 24,
            fontWeight: FontWeight.bold),
        softWrap: true,
        overflow: TextOverflow.visible,
        textAlign: TextAlign.center,
      );


  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    throw UnimplementedError();
  }
}

