import 'package:flutter/material.dart';
import 'package:hack_n_heal/uikit/colors.dart';
import 'package:hack_n_heal/uikit/text.dart';

class AppButton extends StatelessWidget {
  const AppButton({Key? key}) : super(key: key);

  Widget middleButton(text) => Container(
        height: 50,
        margin: const EdgeInsets.symmetric(horizontal: 15, vertical: 10),
        width: double.infinity,
        child: ElevatedButton(
            style: ButtonStyle(
              backgroundColor: MaterialStateProperty.all<Color>(
                  const AppColors().middleButtonColor()),
            ),
            
            onPressed: () {},
            child: AppText().buttonText(text)),
      );

  Widget bigButton(text) => Container(
        height: 120,
        margin: const EdgeInsets.symmetric(horizontal: 15),
        width: double.infinity,
        child: ElevatedButton(
            onPressed: () {},
            child: Text(text,
                style: TextStyle(
                    color: const AppColors().bigButtonColor(),
                    fontSize: 36,
                    fontWeight: FontWeight.w500,
                    letterSpacing: 3))),
      );

  @override
  Widget build(BuildContext context) {
    return Container();
  }
}
