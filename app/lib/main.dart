import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:hack_n_heal/blocs/article_cubit.dart';
import 'package:hack_n_heal/blocs/threads_cubit.dart';
import 'package:hack_n_heal/blocs/topics_cubit.dart';
import 'package:hack_n_heal/pages/articles.dart';
import 'package:hack_n_heal/pages/topics.dart';
import 'package:hack_n_heal/pages/landing.dart';
import 'package:hack_n_heal/pages/partners.dart';
import 'package:hack_n_heal/pages/settings.dart';
import 'package:hack_n_heal/uikit/colors.dart';
import 'package:hack_n_heal/widgets/article/article.dart';
import 'package:hack_n_heal/widgets/topic/topic.dart';
import 'blocs/observer.dart';

void main() {
  debugPaintSizeEnabled = false;
  BlocOverrides.runZoned(() => runApp(const MyApp()), blocObserver: Observer());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Hack&Heal',
      theme: ThemeData(
        primarySwatch: const AppColors().primaryColor(),
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      initialRoute: '/',
      routes: {
        '/': (context) => const HomePage(),
        '/topics': (context) => MultiBlocProvider(providers: [
              BlocProvider(create: (_) => TopicsCubit()),
            ], child: const Topics()),
        '/topic': (context) => MultiBlocProvider(providers: [
              BlocProvider(create: (_) => ThreadsCubit()),
            ], child: const Topic()),
        '/settings': (context) => const Settings(),
        '/articles': (context) => MultiBlocProvider(providers: [
              BlocProvider(create: (_) => ArticlesCubit()),
            ], child: const Articles()),
        '/article': (context) => const Article(),
        '/partners': (context) => const Partners(),
      },
    );
  }
}
