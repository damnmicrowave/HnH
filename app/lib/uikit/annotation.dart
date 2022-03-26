import 'package:flutter/material.dart';
import 'package:hack_n_heal/uikit/text.dart';

class Annotation extends StatelessWidget {
  Annotation({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container();
  }

  Widget grey(text) => Container(
      height: 100,
      alignment: Alignment.center,
      child: AppText().annotationText(text));
}
