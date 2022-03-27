import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

class AppTitle extends StatelessWidget {
  const AppTitle({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container();
  }

  Widget iconTitle(title, context) =>
      Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
        Text(title),
        ElevatedButton(
          style: ElevatedButton.styleFrom(elevation: 0),
          onPressed: () {
            Navigator.pushNamed(context, '/landing');
          },
          child: SvgPicture.asset(
            './assets/files/logo.svg',
          ),
        )
      ]);
}
