import 'package:flutter/material.dart';
import 'package:hack_n_heal/uikit/text.dart';

class AppButton extends StatelessWidget {
  const AppButton({Key? key}) : super(key: key);

  Widget middleButton(text) => Container(
        height: 70,
        margin: const EdgeInsets.all(10),
        width: double.infinity,
        child: ElevatedButton(
            style: ButtonStyle(
              backgroundColor:
                  MaterialStateProperty.all<Color>(const Color(0xFF6288BD)),
            ),
            onPressed: () {},
            child: AppText().buttonText(text)),
      );

  Widget bigButton(text) => Container(
        height: 100,
        margin: const EdgeInsets.symmetric(horizontal: 10),
        width: double.infinity,
        child: ElevatedButton(
            onPressed: () {},
            child: Text(text,
                style: TextStyle(
                    color: Colors.grey[200]!,
                    fontSize: 36,
                    fontWeight: FontWeight.w500,
                    letterSpacing: 3))),
      );

  @override
  Widget build(BuildContext context) {
    return Container();
  }
}
