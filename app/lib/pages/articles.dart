import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:hack_n_heal/blocs/articles_cubit.dart';
import 'package:hack_n_heal/models/articles.dart';

import 'package:hack_n_heal/uikit/annotation.dart';
import 'package:hack_n_heal/uikit/loading.dart';

import 'package:hack_n_heal/uikit/title.dart';
import 'package:hack_n_heal/widgets/article/article_card.dart';

class Articles extends StatefulWidget {
  const Articles({Key? key}) : super(key: key);

  @override
  State<Articles> createState() => _ArticlesState();
}

class _ArticlesState extends State<Articles> {
  @override
  void initState() {
    super.initState();

    final articlesCubit = context.read<ArticlesCubit>();
    if (articlesCubit.state?.objects == null) {
      articlesCubit.loadArticles();
    }
  }

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<ArticlesCubit, ArticlesModel?>(
        builder: (context, state) {
      if (state?.objects == null) {
        return const AppLoading();
      }

      return Scaffold(
        appBar: AppBar(title: const AppTitle().iconTitle('Articles', context)),
        body: ListView(
          children: [
            Annotation().grey('Scientific articles on important topics'),
            ...state!.objects.map((article) => ArticleCard(
                  name: article.name,
                  id: article.id,
                  username: article.author.username,
                  datetime: article.datetime,
                  content: article.content,
                ))
          ],
        ),
      );
    });
  }
}
