import 'package:flutter/material.dart';
import 'package:hack_n_heal/uikit/colors.dart';

class AppText extends StatelessWidget {
  const AppText({Key? key}) : super(key: key);

  Widget buttonText(text) => Text(text,
      style: const TextStyle(
          fontSize: 18, fontWeight: FontWeight.w500, letterSpacing: 1.3));

  Widget tileText(text) => Text(
        text,
        softWrap: true,
        style: const TextStyle(
          fontSize: 18,
          fontWeight: FontWeight.w500,
          letterSpacing: 1.3,
          //overflow: TextOverflow.ellipsis,
        ),
      );

  Widget tileSubtitleText(text) => Text(text,
      style: const TextStyle(
          fontSize: 18,
          fontWeight: FontWeight.w500,
          letterSpacing: 1.3,
          color: Colors.white));

  Widget tileTrailingText(text) => Text(text,
      style: TextStyle(
          fontSize: 16,
          fontWeight: FontWeight.w500,
          letterSpacing: 1.3,
          color: const AppColors().annotationTextColor()));

  Widget annotationText(text) => Text(text,
      style: TextStyle(
          color: const AppColors().annotationTextColor(),
          fontSize: 24,
          fontWeight: FontWeight.w600,
          letterSpacing: 1.3));

  @override
  Widget build(BuildContext context) {
    return Container();
  }
}
