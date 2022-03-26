import 'package:flutter/material.dart';

class AppColors extends StatelessWidget {
  const AppColors({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container();
  }

  Color cardColor() => const Color(0xfff8f9ff);

  Color cardTitleButtonColor() => const Color(0xffbcc5ff);

  Color annotationTextColor() => Colors.grey[600]!;

  Color heading1Color() => const Color(0xFF6288BD);

  Color middleButtonColor() => Color(0xFF6288BD);

  Color bigButtonColor() => Colors.grey[200]!;

  Color cardLabelColor() =>  const Color(0xFF93A4AF);

  MaterialColor primaryColor() => Colors.indigo;

  Color darkColor() => const Color(0xFF202C3D);


}
